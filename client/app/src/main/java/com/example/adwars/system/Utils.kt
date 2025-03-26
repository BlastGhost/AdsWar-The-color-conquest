package com.example.adwars.system

import org.json.JSONObject


class Utils {
    companion object {
        fun merge(vararg jsonObjects: JSONObject): JSONObject {
            val finalJson = JSONObject()

            for (jsonObject in jsonObjects) {
                val keys = jsonObject.keys()

                while (keys.hasNext()) {
                    val key = keys.next()
                    finalJson.put(key, jsonObject[key])
                }
            }

            return finalJson
        }
    }
}