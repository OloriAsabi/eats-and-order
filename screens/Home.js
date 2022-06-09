import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

export default function Home() {
    const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
    <View style={{ backgroundColor: "white", padding: 15 }}>
         <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
         <SearchBar />
    </View>
    <Categories />
    </SafeAreaView>
  )
}