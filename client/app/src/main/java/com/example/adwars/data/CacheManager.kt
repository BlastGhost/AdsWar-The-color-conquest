package com.example.adwars.data

import com.example.adwars.system.models.Player

class CacheManager {
    companion object {
        private var INSTANCE: CacheManager? = null

        fun getInstance(): CacheManager {
            return INSTANCE ?: CacheManager()
        }
    }


    var player: Player? = null
    var token: String? = null



    init {
        if (INSTANCE == null)
            INSTANCE = this
    }
}