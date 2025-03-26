package com.example.adwars.component

import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.mapbox.geojson.Point
import com.mapbox.maps.extension.compose.MapboxMap
import com.mapbox.maps.extension.compose.animation.viewport.rememberMapViewportState
import com.mapbox.maps.extension.style.expressions.generated.Expression.Companion.pitch
import com.mapbox.maps.extension.style.expressions.generated.Expression.Companion.zoom

@Composable
fun MapApi(
    modifier: Modifier = Modifier
) {
    /**MapboxMap(
        modifier,
        mapViewportState = rememberMapViewportState {
            setCameraOptions {
                zoom(2.0)
                center(Point.fromLngLat(-98.0, 39.5))
                pitch(0.0)
                bearing(0.0)
            }
        },
    )*/
}



@Preview(showBackground = true)
@Composable
fun MapPreview() {
    Box(
        modifier = Modifier
    ) {
        MapApi()
    }
}