package com.example.adwars.system.savers

import androidx.compose.runtime.saveable.listSaver
import androidx.compose.runtime.saveable.mapSaver
import com.example.adwars.system.models.AWGroup
import com.example.adwars.system.models.Player

object GroupSaver {
    val saver = mapSaver(
        save = { group ->
            mapOf(
                "id" to group.id,
                "username" to group.name
            )
        },
        restore = {
            AWGroup(
                it["id"] as String,
                it["name"] as String,
            )
        }
    )
}

