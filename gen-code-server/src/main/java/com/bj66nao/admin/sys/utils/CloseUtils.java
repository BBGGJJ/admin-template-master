package com.bj66nao.admin.sys.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * Created by EDZ on 2020/6/19.
 */
public class CloseUtils {
    private static Logger logger = LoggerFactory.getLogger(CloseUtils.class);

    public static void close(ResultSet resultSet, PreparedStatement ps, Connection conn) {
        if (resultSet != null) {
            try {
                resultSet.close();
            } catch (Exception e) {
                logger.error(e.getMessage(), e);
            }
            if (ps != null) {
                try {
                    ps.close();
                } catch (Exception e) {
                    logger.error(e.getMessage(), e);
                }
            }
            if (conn != null) {
                try {
                    conn.close();
                } catch (Exception e) {
                    logger.error(e.getMessage(), e);
                }
            }
        }


    }
}
