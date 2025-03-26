package com.example.adwars.component

import android.hardware.Sensor
import android.hardware.SensorManager
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview

@Composable
fun PaintTank(
    modifier: Modifier = Modifier
) {


}


@Preview(showBackground = true)
@Composable
fun PreviewPaintTank() {
    Scaffold { innerPadding ->
        PaintTank(modifier = Modifier.padding(innerPadding))
    }
}