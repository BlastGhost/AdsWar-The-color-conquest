package com.example.adwars.component

import android.widget.ProgressBar
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Paint
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.clipPath
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
fun PaintTank(
    color: Color,
    currentValue: Float,
    maxValue: Float,
    modifier: Modifier = Modifier
) {
    val height by remember { mutableFloatStateOf(currentValue / maxValue) }

    Box(
        Modifier
            .fillMaxSize()
    ) {
        Canvas(
            Modifier
                .matchParentSize()
                .background(Color.Transparent)
        ) {
            val yPosition = size.height - size.height * height
            val paintPath = Path().apply {
                moveTo(
                    x = 0f,
                    y = size.height,
                )
                lineTo(
                    x = size.width,
                    y = size.height,
                )
                lineTo(
                    x = size.width,
                    y = yPosition,
                )
                lineTo(
                    x = 0f,
                    y = yPosition
                )
                close()
            }


            drawPath(
                path = paintPath,
                color = color,
            )
        }
    }

}


@Preview
@Composable
fun PreviewPaintTank() {
    Column(
        verticalArrangement = Arrangement.spacedBy(20.dp)
    ) {
        Box(
            Modifier
                .height(60.dp)
                .width(100.dp)
        ) {
            PaintTank(Color.Red, 100f, 100f)
        }

        Box(
            Modifier
                .height(50.dp)
                .width(50.dp)
        ) {
            PaintTank(Color.Blue, 25f, 50f)
        }
        Box(
            Modifier
                .height(40.dp)
                .width(500.dp)
        ) {
            PaintTank(Color.Blue, 25f - 20f, 25f)
        }
    }
}