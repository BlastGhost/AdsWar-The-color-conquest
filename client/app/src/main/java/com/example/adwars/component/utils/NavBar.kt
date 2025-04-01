package com.example.adwars.component.utils

import android.graphics.drawable.Icon
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScope
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.adwars.R
import com.example.adwars.ui.theme.Modifiers

@Composable
fun NavBar(
    label: String,
    modifier: Modifier = Modifier,
) {
    Row(
        Modifier
            .fillMaxWidth()
            .height(60.dp)
            .clip(RoundedCornerShape(0.dp, 0.dp, Modifiers.borderRadiusMediumDp, Modifiers.borderRadiusMediumDp))
            .background(colorResource(R.color.primary))
            .padding(horizontal = Modifiers.paddingMedium),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween,
    ) {

        Text(
            label,
            color = colorResource(R.color.secondary),
            textAlign = TextAlign.Center,
            fontSize = Modifiers.fontSizeLarge,
            fontWeight = FontWeight.Bold
        )

    }
}



@Composable
@Preview
private fun NavPreview() {
    NavBar("Bonjour")
}