package com.example.adwars.component

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp

@Composable
fun Container(
    modifier: Modifier = Modifier,
    roundness: Dp = 10.dp,
    padding: Dp = 10.dp,
    content: @Composable () -> Unit
) {
    Box(
       modifier = modifier
           .clip(shape = RoundedCornerShape(roundness))
           .padding(PaddingValues(padding))
    ) {
        content()
    }
}