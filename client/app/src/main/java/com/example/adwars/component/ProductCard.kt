package com.example.adwars.component

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Scaffold
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
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.TextUnitType
import androidx.compose.ui.unit.dp
import com.example.adwars.R
import com.example.adwars.ui.theme.AdWarsTheme

@Composable
fun ProductCard(
    @StringRes productName: Int,
    @DrawableRes image: Int,
    @StringRes contentDescription: Int,
    modifier: Modifier = Modifier,
) {
    val imagePainter = painterResource(image)

    Box(
        contentAlignment = Alignment.BottomCenter,
        modifier = modifier
            .shadow(elevation = 10.dp, shape = RoundedCornerShape(22.dp))
    ) {

        Image(
            painter = imagePainter,
            contentDescription = stringResource(contentDescription),
            contentScale = ContentScale.Crop,
            modifier = Modifier
                .background(color = Color.Transparent)
                .clip(RoundedCornerShape(22.dp))
        )
        Container(
            modifier = Modifier
                .background(
                    brush = Brush.verticalGradient(
                        colors = listOf(
                            Color.Transparent,
                            Color.DarkGray
                        ), startY = 170.0f
                    ), shape = RoundedCornerShape(20.dp)
                )
                .width(100.dp)
                .aspectRatio(1f / 1f)


        ) {}
        Text(
            text = stringResource(productName),
            color = Color.White,
            fontSize = TextUnit(value = 25.0f, type = TextUnitType.Sp),
            modifier = Modifier
                .padding(top = 15.dp)
        )
    }

}


@Preview
@Composable
fun ProductcardPreview() {
    AdWarsTheme {
        Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
            ProductCard(
                productName = R.string.item_test,
                image = R.drawable.ic_launcher_background,
                contentDescription = R.string.item_description,
                modifier = Modifier.padding(innerPadding)
            )
        }
    }
}