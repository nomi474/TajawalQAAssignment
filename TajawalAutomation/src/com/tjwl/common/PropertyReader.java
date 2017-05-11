package com.tjwl.common;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

/**
 * Author: Nauman Sheikh
 * Date: 9/5/2017
 * Time: 10:36 AM
 * Java File to read and load all the properties from the global.properties file.
 */
public class PropertyReader {

    Properties properties;

    public PropertyReader(){
        loadAllProperties();
    }

    private void loadAllProperties() {
        properties = new Properties();
        try {
            properties.load(new FileInputStream("global.properties"));
        } catch (IOException e) {
            throw new RuntimeException("Could not read the properties file");
        }
    }

    public String readItem(String propertyName) {
        return properties.getProperty(propertyName);
    }
}
