package com.example.adwars.component

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.height
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.adwars.R
import com.example.adwars.ui.theme.Modifiers

@Composable
fun AdButton(
    onClick: () -> Unit,
    content: @Composable () -> Unit,
) {
    Box(
        Modifiers.BOX
            .background(colorResource(R.color.primary))
            .height(60.dp)
            .clickable { onClick() },
        contentAlignment = Alignment.Center,
    ) {
        content()
    }
}



@Preview
@Composable
private fun ADButtonPreview() {
    AdButton(
        {}
    ) {
        Text("GO !")
    }
}