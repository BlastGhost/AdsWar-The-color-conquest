package com.example.adwars.component.utils

import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier

@Composable
fun SearchBar(
    label: String,
    list: ArrayList<String>,
    modifier: Modifier = Modifier
) {
    var textState by rememberSaveable { mutableStateOf("") }

    TextInputBar(label) { }
}