package com.example.adwars.activities

import android.content.Context
import android.content.Intent
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
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.TextUnitType
import androidx.compose.ui.unit.dp
import com.example.adwars.MainActivity
import com.example.adwars.R
import com.example.adwars.component.Inventory
import com.example.adwars.component.MyButton
import com.example.adwars.ui.theme.AdWarsTheme
import com.example.adwars.ui.theme.Modifiers

class Dashboard : ComponentActivity(), SensorEventListener {
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



        val x by xRotation
        val y by yRotation
        val z by zRotation



        setContent {
            AdWarsTheme {
                Scaffold(
                    modifier = Modifier.fillMaxSize()
                ) { innerPadding ->
                    Column(
                        modifier = Modifier
                            .padding(innerPadding)
                            .fillMaxSize()
                            .padding(Modifiers.paddingLarge)
                        ,
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.SpaceBetween
                    ) {
                        Column(
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.spacedBy(4.dp)
                        ) {
                            Username("USERNAME")
                            TimeRemaining()
                        }

                        Row(
                            Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceAround,
                            verticalAlignment = Alignment.CenterVertically,
                        ) {
                            TeamProgression()
                            PaintTank()
                        }

                        // MAP
                        Map()
                        Inventory()
                        GoButton { changeToMap() }
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

        if (event != null && event.sensor.type == Sensor.TYPE_ACCELEROMETER) {
            this.xRotation.floatValue = event.values[0]
            this.yRotation.floatValue = event.values[1]
            this.zRotation.floatValue = event.values[2]

            //Log.d("Debug", "x:" + this.xRotation.toString() + " y:" + this.yRotation.toString() + " z:" + this.zRotation.toString())
        }
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {} //Nothing to do here



    private fun changeToMap() {
        val change = Intent(this, MainActivity::class.java)
        startActivity(change)
    }
}



@Composable
fun Username(
    username: String,
) {
    Box(
        Modifiers.BOX
            .height(60.dp)
            .background(
                color = colorResource(R.color.primary),
            ),
        contentAlignment = Alignment.Center,
    ) {
        Column(
            Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
        ) {
            Text(
                username,
                color = colorResource(R.color.secondary),
                fontSize = Modifiers.fontSizeMedium,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center,
            )
        }
    }
}



@Composable
fun TimeRemaining() {
    Text(
        "XXj - 00h00m00s",
        fontWeight = FontWeight.ExtraBold,
        fontFamily = FontFamily.Monospace,
    )
}



@Composable
fun TeamProgression() {
    Column(
        verticalArrangement = Arrangement.spacedBy(10.dp)
    ) {
        Text("Teams")

        Row(
            horizontalArrangement = Arrangement.spacedBy(Modifiers.gapMedium)
        ) {
            Column {
                Text("Red")
                Text("Green")
                Text("Blue")
                Text("Orange")
                Text("Purple")
            }
            Column {
                Text("XX %")
                Text("XX %")
                Text("XX %")
                Text("XX %")
                Text("XX %")
            }
        }
    }
}



@Composable
fun PaintTank() {
    Box(
        Modifier
            .height(120.dp)
            .aspectRatio(1f / 1f)
            .background(Color.LightGray)
    ) {

    }
}



@Composable
fun Map() {
    Box(
        Modifiers.BOX
            .fillMaxHeight(.35f)
            .background(Color.DarkGray)

    ) {  }
}



@Composable
fun GoButton(onClick: () -> Unit) {
    Button(
        onClick,
        Modifiers.BOX
            .fillMaxWidth()
            .height(60.dp)
    ) {
        Text(
            "GO !",
            fontSize = Modifiers.fontSizeMedium,
            fontWeight = FontWeight.Bold,
        )
    }
}


@Preview(showBackground = true)
@Composable
fun ComposablePreview() {
    Box(
        Modifiers.INPUT_FIELD
            .height(40.dp)
    ) {

    }


    /*
    Column(
        verticalArrangement = Arrangement.spacedBy(20.dp)
    ) {
        Username("USERNAME")
        TimeRemaining()
        TeamProgression()
        GoButton()
    }
     */
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