package com.example.adwars.activities

import android.content.Context
import android.content.pm.ActivityInfo
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import com.example.adwars.R
import com.example.adwars.ui.theme.AdWarsTheme

class MainMenu : ComponentActivity() , SensorEventListener {

    private lateinit var sensorManager: SensorManager
    private lateinit var accelerometerReading: Sensor
    private lateinit var gyroscope: Sensor


    private var xRotation = mutableFloatStateOf(0f)
    private var yRotation = mutableFloatStateOf(0f)
    private var zRotation = mutableFloatStateOf(0f)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT)

        enableEdgeToEdge()


        sensorManager = getSystemService(Context.SENSOR_SERVICE) as SensorManager

        // Be careful with '!!'
        accelerometerReading = sensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)!!
        gyroscope = sensorManager.getDefaultSensor(Sensor.TYPE_GYROSCOPE)!!



        setContent {
            AdWarsTheme {
                val modifier: Modifier = Modifier
                    .background(color = colorResource(R.color.primary))
                val x by xRotation
                val y by yRotation
                val z by zRotation

                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally,
                        modifier = Modifier
                            .padding(70.dp)
                            .fillMaxSize()
                    ) {

                        Username(
                            "Je suis moi",
                            modifier = Modifier
                        )
                        //Text(text = "x:$x, y:$y, z:$z")
                    }

                }
            }
        }
    }

    override fun onResume() {
        sensorManager.registerListener(this, accelerometerReading, SensorManager.SENSOR_DELAY_UI)
        super.onResume()

    }

    override fun onPause() {
        sensorManager.unregisterListener(this, accelerometerReading)
        super.onPause()
    }

    override fun onSensorChanged(event: SensorEvent?) {
        // Get captors values

        if (event != null && event.sensor.getType() == Sensor.TYPE_ACCELEROMETER) {
            this.xRotation.floatValue = event.values[0];
            this.yRotation.floatValue = event.values[1];
            this.zRotation.floatValue = event.values[2];

            //Log.d("Debug", "x:" + this.xRotation.toString() + " y:" + this.yRotation.toString() + " z:" + this.zRotation.toString())
        }
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {} //Nothing to do here
}

@Composable
fun Username(
    userName: String,
    modifier: Modifier = Modifier,
    textModifier: Modifier = Modifier,
) {
    Box (
        modifier = modifier
            .padding(horizontal = 25.dp)
            .background(color = colorResource(R.color.primary),shape = RoundedCornerShape(10.dp))

    ) {
        Text(
            text = userName,
            color = colorResource(R.color.secondary),
            textAlign = TextAlign.Center,
            modifier = textModifier
                .fillMaxWidth()
        )
    }
}
/**@Preview(showBackground = true)
@Composable
fun PreviewTest() {
    val change = Intent(this, MainActivity::class.java)

    MyButton(
        content = {
            Text(text = stringResource(R.string.go))
        },
        modifier = Modifier.padding(innerPadding),
        onClick = {
            startActivity(change)

        }
    )
}**/