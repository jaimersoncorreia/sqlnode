dataSource {
    pooled = true
    driverClassName = "org.postgresql.Driver"
    embeddedPostgres: true
hibernate {
    cache.use_second_level_cache = true
    cache.use_query_cache = true
    cache.provider_class = 'net.sf.ehcache.hibernate.EhCacheProvider'
}
// environment specific settings
environments {
    development {
        dataSource {
            dbCreate = "update" // one of 'create', 'create-drop','update'
            //url = "jdbc:hsqldb:mem:devDB"
            url = "jdbc:postgresql://localhost:15432/restaurante"
            username = "docker"
            password = "docker"
            dialect = "org.hibernate.dialect.PostgreSQLDialect"
        }
        }
    }
    test {
        dataSource {
            dbCreate = "update"
            url = "jdbc:hsqldb:mem:testDb"
        }
    }
    production {
        dataSource {
            dbCreate = "update"
            url = "jdbc:hsqldb:file:prodDb;shutdown=true"
        }
    }
}
