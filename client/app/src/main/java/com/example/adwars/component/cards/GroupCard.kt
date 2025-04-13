package com.example.adwars.component.cards

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.example.adwars.ui.theme.Modifiers

@Composable
fun GroupCard(
    name: String,
    modifier: Modifier = Modifier
) {
    Box(
        Modifiers.BOX
            .background(Color.LightGray)
            .padding(Modifiers.paddingLarge)
    ) {
        Row(
            Modifier
                .fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween,
        ) {
            Text(name)
            Text("XX / YY")
        }
    }
}