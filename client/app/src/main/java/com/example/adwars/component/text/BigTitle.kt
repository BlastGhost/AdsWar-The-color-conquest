package com.example.adwars.component.text

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.TextUnitType
import com.example.adwars.ui.theme.Modifiers

@Composable
fun BigTitle(text: String) {
    Text(
        text,
        fontSize = Modifiers.fontSizeBigTitle,
        fontWeight = FontWeight.ExtraBold,
        textAlign = TextAlign.Center,
        lineHeight = TextUnit(48f, TextUnitType.Sp),
    )
}