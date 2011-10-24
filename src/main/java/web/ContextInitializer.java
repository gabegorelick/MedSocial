package web;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import model.Message;


import com.googlecode.objectify.ObjectifyService;



/**
 */
public final class ContextInitializer implements ServletContextListener {
    @Override
    public void contextInitialized(final ServletContextEvent sce) {
        ObjectifyService.register(Message.class);
    }

    @Override
    public void contextDestroyed(final ServletContextEvent sce) {
        // empty
    }
}
