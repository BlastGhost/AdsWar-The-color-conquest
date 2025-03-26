package com.example.adwars.system.savers

import androidx.compose.runtime.saveable.mapSaver
import com.example.adwars.system.models.Player

object PlayerSaver {
    val saver = mapSaver(
        save = { player ->
            mapOf(
                "id" to player.id,
                "username" to player.username
            )
        },
        restore = {
            Player(
                it["id"] as String,
                it["username"] as String,
            )
        }
    )
}