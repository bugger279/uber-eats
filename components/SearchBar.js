import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
    return (
        <View style={styles.searchContainer}>
            <GooglePlacesAutocomplete
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 8
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        // marginRight: 20
                    }
                }}
                renderLeftButton={() => (
                    <View>
                        <Ionicons
                            style={{ marginLeft: 10, marginTop: 5 }}
                            name='location-sharp'
                            size={24}
                        />
                    </View>
                )}
                renderRightButton={() => (
                    <TouchableOpacity>
                        <View style={styles.searchButton}>
                            <AntDesign style={{ marginRight: 6 }} name='clockcircle' size={11} />
                            <Text>Search</Text>
                        </View>
                    </TouchableOpacity>
                )}
                placeholder='Search...'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 15,
        flexDirection: 'row'
    },
    searchButton: { flexDirection: 'row', alignItems: 'center', marginRight: 8, backgroundColor: '#fff', padding: 8, borderRadius: 20 }
})
