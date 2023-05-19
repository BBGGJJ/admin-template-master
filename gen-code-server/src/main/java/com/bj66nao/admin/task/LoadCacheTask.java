package com.bj66nao.admin.task;

import com.bj66nao.admin.cached.ICache;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Set;

/**
 *
 * @author EDZ
 * @date 2020/5/23
 */

@Component
public class LoadCacheTask {

    private static Logger logger = LoggerFactory.getLogger(LoadCacheTask.class);

    private final Set<ICache> caches;

    @Autowired
    public LoadCacheTask(Set<ICache> caches) {
        this.caches = caches;
    }

    @Scheduled(cron = "0 0/1 * * * ?")
    @PostConstruct
    public void load() {
        for (ICache cache : caches) {
            logger.info("{} load start", cache.getClass().getName());
            cache.load();
            logger.info("{} load end", cache.getClass().getName());
        }
    }
}
