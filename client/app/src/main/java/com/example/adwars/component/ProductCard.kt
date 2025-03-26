package com.example.adwars.component

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.adwars.R
import com.example.adwars.ui.theme.Modifiers

@Composable
fun ProductCard(
    productName: String,
    @DrawableRes image: Int,
    @StringRes contentDescription: Int,
    modifier: Modifier = Modifier,
) {
    val imagePainter = painterResource(image)

    Box(
        contentAlignment = Alignment.BottomCenter,
        modifier = modifier
            .height(120.dp)
            .aspectRatio(1f / 1f)
            .shadow(
                elevation = 10.dp,
                shape = Modifiers.borderRadiusMedium
            )
    ) {
        Image(
            painter = imagePainter,
            contentDescription = stringResource(contentDescription),
            contentScale = ContentScale.Crop,
            modifier = Modifier
                .matchParentSize()
                .background(color = Color.Transparent)
                .clip(Modifiers.borderRadiusMedium)
        )

        Box(
            Modifier
                .matchParentSize()
                .background(
                    brush = Brush.verticalGradient(
                        colors = listOf(
                            Color.Transparent,
                            Color.DarkGray
                        ),
                        startY = 170.0f
                    ),
                )
        )

        Row(
            Modifier
                .fillMaxWidth()
                .padding(Modifiers.paddingSmall),
            horizontalArrangement = Arrangement.SpaceBetween,
        ) {
            Text(
                text = productName,
                color = Color.White,
                fontSize = Modifiers.fontSizeSmall,
            )

            Text(
                "x NN",
                color = Color.White,
                fontSize = Modifiers.fontSizeSmall,
            )
        }
    }

}


@Preview
@Composable
fun ProductcardPreview() {
    ProductCard(
        productName = stringResource(R.string.item_test),
        image = R.drawable.ic_launcher_background,
        contentDescription = R.string.item_description,
    )
}