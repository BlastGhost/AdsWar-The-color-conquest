package com.example.adwars.component

import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview

@Composable
fun SaveVariable(
    modifier: Modifier = Modifier
) {

    var counter by rememberSaveable { mutableIntStateOf(0) }

    Button(
        onClick = {
            counter += 1
        },
        modifier = modifier

    ) {
        Text(text = counter.toString())
    }
}


@Preview(showBackground = true)
@Composable
fun VariablePreview() {
    Scaffold { innerPadding ->
       SaveVariable()
    }
}