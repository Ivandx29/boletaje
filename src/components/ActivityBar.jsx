import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Card, Modal, Text } from '@ui-kitten/components';

const ActivityBar = ({ visible, msj = "Cargando..." }) => {
    return (
        <Modal visible={visible} backdropStyle={styles.Modal}>
            <Card disabled={true} style={styles.Card}>
                {Platform.OS === 'android' &&
                    <>
                        <ActivityIndicator size={60} color="#A93226" />
                    </>
                }
                {Platform.OS === 'ios' &&
                    <>
                        <ActivityIndicator size="large" color="#A93226" />
                    </>
                }
                <Text style={'mt-2 text-center text-sm font-bold'}>{msj}</Text>
            </Card>
        </Modal>
    )
};

/* <-- Styles --> */
const styles = StyleSheet.create({
    Modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    Card: {
        borderRadius: 25,
    }
});

export default ActivityBar;