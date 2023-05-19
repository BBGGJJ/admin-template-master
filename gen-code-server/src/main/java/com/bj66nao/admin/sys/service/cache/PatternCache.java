package com.bj66nao.admin.sys.service.cache;

import java.lang.ref.ReferenceQueue;
import java.lang.ref.SoftReference;
import java.util.AbstractMap;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.regex.Pattern;

/**
 * Created by EDZ on 2020/8/10.
 */
public class PatternCache extends AbstractMap<String, Pattern> implements Map<String, Pattern>  {
    private Map<String, SoftReference<Pattern>> hash;
    private ReferenceQueue queue;

    @Override
    public Set entrySet() {
        this.processQueue();
        return this.hash.entrySet();
    }

    private void processQueue() {
        SoftValueRef ref;
        while ((ref = (SoftValueRef) this.queue.poll()) != null) {
            if (ref == (SoftValueRef) this.hash.get(ref.key)) {
                this.hash.remove(ref.key);
            }
        }

    }

    public PatternCache(int initialCapacity, float loadFactor) {
        this.queue = new ReferenceQueue();
        this.hash = new HashMap(initialCapacity, loadFactor);
    }

    public PatternCache(int initialCapacity) {
        this.queue = new ReferenceQueue();
        this.hash = new HashMap(initialCapacity);
    }

    public PatternCache() {
        this.queue = new ReferenceQueue();
        this.hash = new HashMap();
    }

    public PatternCache(Map t) {
        this(Math.max(2 * t.size(), 11), 0.75F);
        this.putAll(t);
    }

    @Override
    public int size() {
        this.processQueue();
        return this.hash.size();
    }

    @Override
    public boolean isEmpty() {
        this.processQueue();
        return this.hash.isEmpty();
    }

    @Override
    public boolean containsKey(Object key) {
        this.processQueue();
        return this.hash.containsKey(key);
    }

    public Pattern get(String key) {
        this.processQueue();
        SoftReference<Pattern> ref = (SoftReference) this.hash.get(key);
        return ref != null ? ref.get() : null;
    }

    @Override
    public void putAll(Map m) {

    }

    @Override
    public Pattern put(String key, Pattern value) {
        this.processQueue();
        SoftReference<Pattern> rtn = this.hash.put(key, SoftValueRef.create(key, value, this.queue));
        if (rtn != null) {
            return rtn.get();
        }
        return null;
    }

    @Override
    public Pattern remove(Object key) {
        this.processQueue();
        return this.hash.remove(key).get();
    }

    @Override
    public void clear() {
        this.processQueue();
        this.hash.clear();
    }

    private static class SoftValueRef extends SoftReference<Pattern> {
        public String key;

        private SoftValueRef(String key, Pattern val, ReferenceQueue q) {
            super(val, q);
            this.key = key;
        }

        private static SoftValueRef create(String key, Pattern val, ReferenceQueue q) {
            return val == null ? null : new SoftValueRef(key, val, q);
        }
    }
}
