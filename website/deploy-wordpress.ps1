# WordPress Deploy via Coolify API
$COOLIFY_URL = "https://coolify.adsxifu.com"
$TOKEN = "1|IViCop6VNvSvNv9PPPmYYGRyh2TQ9KPKcNsiKHMtc8b728ab"
$headers = @{ "Authorization" = "Bearer $TOKEN"; "Content-Type" = "application/json" }

Write-Host "Testing connection..." -ForegroundColor Cyan
try {
    $me = Invoke-RestMethod -Uri "$COOLIFY_URL/api/v1/user/me" -Headers $headers
    Write-Host "Connected as: $($me.name)" -ForegroundColor Green
} catch {
    Write-Error "Cannot reach $COOLIFY_URL - check URL and network"
    exit 1
}

# List servers
Write-Host "`nAvailable servers:" -ForegroundColor Yellow
$servers = Invoke-RestMethod -Uri "$COOLIFY_URL/api/v1/servers" -Headers $headers
foreach ($s in $servers.data) {
    Write-Host "  [$($s.id)] $($s.name) - $($s.server_settings.hostname)" -ForegroundColor Cyan
}
$serverId = Read-Host "Enter Server ID"

# Generate random password
$dbPassword = "WP_" + (New-Guid).Guid.Substring(0,13)

# Create project first (if not exists) or find existing
Write-Host "`nListing projects..." -ForegroundColor Yellow
$projects = Invoke-RestMethod -Uri "$COOLIFY_URL/api/v1/project" -Headers $headers
foreach ($p in $projects.data) {
    Write-Host "  [ID: $($p->id)] $($p->name)" -ForegroundColor Cyan
}
$projectId = Read-Host "Enter Project ID (or press Enter to create new)"

# Create project if not specified
if ([string]::IsNullOrWhiteSpace($projectId)) {
    Write-Host "`nCreating new project..." -ForegroundColor Yellow
    $createBody = @{ name = "My Projects" } | ConvertTo-Json
    $newProj = Invoke-RestMethod -Uri "$COOLIFY_URL/api/v1/project/create" -Headers $headers -Body $createBody -Method Post
    $projectId = $newProj->uuid
    Write-Host "Project created: $projectId" -ForegroundColor Green
}

# Create Docker Compose resource
Write-Host "`nDeploying WordPress..." -ForegroundColor Cyan

# Step 1: Create resource
$resourceBody = @{
    type       = "docker-compose"
    name       = "wordpress-blog"
    server_id  = [int]$serverId
    project_id = $projectId
} | ConvertTo-Json

$resource = Invoke-RestMethod -Uri "$COOLIFY_URL/api/v1/docker/compose/deploy" -Headers $headers -Body $resourceBody -Method Post
Write-Host "Resource created: $($resource.id)" -ForegroundColor Green

# Step 2: Update compose file
Write-Host "Configuring Docker Compose..." -ForegroundColor Yellow
$composeData = @"
version: '3'

services:
  wordpress:
    image: wordpress:latest
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_NAME: wordpress
      WORDPRESS_DB_USER: wp_user
      WORDPRESS_DB_PASSWORD: ${dbPassword}
    depends_on:
      - db
    volumes:
      - wordpress_data:/var/www/html

  db:
    image: mysql:8.0
    restart: always
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wp_user
      MYSQL_PASSWORD: ${dbPassword}
      MYSQL_ROOT_PASSWORD: ${dbPassword}
    volumes:
      - db_data:/var/lib/mysql

volumes:
  wordpress_data:
  db_data:
"@

Save-Content -Path ".\docker-compose.wp.yml" -Value $composeData

Write-Host "`nDone! Copy docker-compose.wp.yml ke directory server atau import melalui UI." -ForegroundColor Green
Write-Host "DB Password: $dbPassword" -ForegroundColor Red
