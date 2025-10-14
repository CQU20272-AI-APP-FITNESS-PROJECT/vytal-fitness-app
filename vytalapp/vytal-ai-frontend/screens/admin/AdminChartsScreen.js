import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { useFocusEffect } from '@react-navigation/native';
import { COLORS } from '../../constants/colors';
import apiClient from '../../api/client';

const screenWidth = Dimensions.get("window").width;

const AdminChartsScreen = () => {
    const [clickData, setClickData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const chartConfig = {
        backgroundGradientFrom: COLORS.white,
        backgroundGradientTo: COLORS.white,
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(2, 106, 226, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: { borderRadius: 16 },
        propsForDots: { r: "6", strokeWidth: "2", stroke: COLORS.primary },
    };

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const clicksResponse = await apiClient.get('/admin/charts/product-clicks');
            if (clicksResponse.data && clicksResponse.data.length > 0) {
                const labels = clicksResponse.data.map(item => item.name);
                const dataPoints = clicksResponse.data.map(item => item.clicks);
                setClickData({
                    labels: labels.map(label => label.length > 10 ? label.substring(0, 10) + '...' : label), // Truncate long labels
                    datasets: [{ data: dataPoints }],
                });
            } else {
                setClickData(null); // No data to show
            }
        } catch (err) {
            console.error("Failed to fetch chart data:", err);
            setError("Could not load chart data.");
        } finally {
            setIsLoading(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
        }, [])
    );

    const renderClicksChart = () => {
        if (!clickData) {
            return <Text style={styles.noDataText}>No product click data available yet. Clicks are logged when users tap "Buy Now".</Text>;
        }
        return <BarChart style={styles.chart} data={clickData} width={screenWidth - 40} height={250} yAxisLabel="" yAxisSuffix="" chartConfig={chartConfig} verticalLabelRotation={15} />;
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Product Performance</Text>
                <View style={styles.chartContainer}>
                    <Text style={styles.chartTitle}>"Buy Now" Clicks Per Product</Text>
                    {isLoading ? <ActivityIndicator size="large" color={COLORS.primary} /> : error ? <Text style={styles.errorText}>{error}</Text> : renderClicksChart()}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLORS.lightGray },
    content: { padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: COLORS.dark, marginBottom: 20 },
    chartContainer: { backgroundColor: COLORS.white, borderRadius: 16, padding: 15, alignItems: 'center' },
    chartTitle: { fontSize: 18, fontWeight: '600', color: COLORS.dark, marginBottom: 15 },
    chart: { marginVertical: 8, borderRadius: 16 },
    noDataText: { fontSize: 16, color: COLORS.gray, textAlign: 'center', padding: 20 },
    errorText: { fontSize: 16, color: COLORS.danger, textAlign: 'center', padding: 20 },
});

export default AdminChartsScreen;