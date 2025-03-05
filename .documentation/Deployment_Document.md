# Deployment Configuration

## 1. Deployment Architecture

### 1.1 Infrastructure Overview
- **Frontend**: Vercel (Next.js)
- **CMS**: Sanity.io
- **Database**: Supabase
- **Authentication**: Clerk
- **Media Storage**: Sanity.io Asset Pipeline
- **Analytics**: Custom Supabase Implementation

### 1.2 Environment Structure
- Development (Local)
- Staging
- Production

## 2. Service Configurations

### 2.1 Vercel Configuration
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### 2.2 Environment Variables
```env
# Next.js
NEXT_PUBLIC_SITE_URL=https://villepajala.com

# Sanity.io
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
SANITY_PREVIEW_SECRET=your-preview-secret

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key
CLERK_SECRET_KEY=your-secret-key

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## 3. Deployment Workflows

### 3.1 Development Workflow
1. Local development with `.env.local`
2. Push to feature branch
3. GitHub Actions run tests
4. Preview deployment on Vercel
5. Code review and approval
6. Merge to main branch

### 3.2 Staging Deployment
1. Automatic deployment from main branch
2. Staging environment variables
3. Integration testing
4. Performance testing
5. Content preview testing

### 3.3 Production Deployment
1. Manual trigger from staging
2. Production environment variables
3. Zero-downtime deployment
4. CDN cache invalidation
5. Post-deployment health checks

## 4. Infrastructure Setup

### 4.1 Vercel Setup
1. Connect GitHub repository
2. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Add environment variables
4. Configure custom domain
5. Enable preview deployments

### 4.2 Sanity.io Setup
1. Create new project
2. Configure CORS origins
3. Set up datasets:
   - Development
   - Staging
   - Production
4. Configure API access
5. Set up webhooks for content updates

### 4.3 Supabase Setup
1. Create new project
2. Configure database schema
3. Set up row level security
4. Configure authentication
5. Set up real-time subscriptions

### 4.4 Clerk Setup
1. Create new application
2. Configure OAuth providers
3. Set up JWT templates
4. Configure webhook endpoints
5. Set up user management

## 5. Monitoring & Maintenance

### 5.1 Health Monitoring
- Uptime monitoring (Vercel)
- API endpoint monitoring
- Database performance monitoring
- Error tracking (Sentry)
- Real-time analytics

### 5.2 Performance Monitoring
- Core Web Vitals
- Server response times
- Database query performance
- API latency
- Cache hit rates

### 5.3 Security Monitoring
- SSL certificate monitoring
- Authentication audit logs
- Database access logs
- API request logging
- Security scanning

## 6. Backup & Recovery

### 6.1 Database Backups
- Daily automated backups (Supabase)
- Point-in-time recovery
- Backup retention: 30 days
- Monthly backup archives
- Backup testing schedule

### 6.2 Content Backups
- Sanity.io dataset exports
- Media asset backups
- Document version history
- Export schedules
- Restoration procedures

## 7. Scaling Configuration

### 7.1 Frontend Scaling
- Vercel automatic scaling
- CDN configuration
- Static page generation
- API route scaling
- Image optimization

### 7.2 Database Scaling
- Connection pooling
- Read replicas
- Cache strategies
- Query optimization
- Table partitioning

### 7.3 Content Delivery
- CDN configuration
- Image optimization
- Asset caching
- Geographic distribution
- Cache invalidation

## 8. Disaster Recovery

### 8.1 Recovery Procedures
1. Identify incident severity
2. Initiate recovery plan
3. Restore from backups
4. Verify data integrity
5. Resume operations

### 8.2 Recovery Time Objectives
- Tier 1 (Critical): < 1 hour
- Tier 2 (Major): < 4 hours
- Tier 3 (Minor): < 24 hours

## 9. Security Configuration

### 9.1 SSL/TLS Configuration
```nginx
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:SSL:50m;
ssl_session_tickets off;
ssl_stapling on;
ssl_stapling_verify on;
```

### 9.2 Security Headers
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://analytics.villepajala.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.villepajala.com;"
        }
      ]
    }
  ]
}
```

## 10. Deployment Checklist

### 10.1 Pre-Deployment
- [ ] All tests passing
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Content updates staged
- [ ] Security scan completed
- [ ] Performance benchmarks met
- [ ] Backup verified
- [ ] Documentation updated

### 10.2 Deployment
- [ ] Notify team of deployment
- [ ] Execute database migrations
- [ ] Deploy application changes
- [ ] Update CDN configuration
- [ ] Clear relevant caches
- [ ] Verify SSL certificates
- [ ] Check security headers

### 10.3 Post-Deployment
- [ ] Run smoke tests
- [ ] Verify monitoring systems
- [ ] Check error rates
- [ ] Validate performance
- [ ] Test critical user flows
- [ ] Verify backup systems
- [ ] Update status page
- [ ] Monitor analytics

## 11. Rollback Procedures

### 11.1 Application Rollback
1. Identify rollback point
2. Revert database migrations
3. Deploy previous version
4. Clear caches
5. Verify functionality

### 11.2 Database Rollback
1. Stop application servers
2. Restore database backup
3. Verify data integrity
4. Restart application
5. Verify functionality

## 12. Contact Information

### 12.1 Emergency Contacts
- **Primary**: Ville Pajala
- **Secondary**: [TBD]
- **DevOps**: [TBD]

### 12.2 Service Providers
- Vercel Support
- Sanity.io Support
- Supabase Support
- Clerk Support 