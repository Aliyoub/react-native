import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const apiGetAllFoods = 'http://localhost:3000/foods';
async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json();
        return responseJson; //list of foods
    } catch (error) {
        console.log('asasa');
        console.error(`Error is : ${error}`);
    }
}
export {getFoodsFromServer};