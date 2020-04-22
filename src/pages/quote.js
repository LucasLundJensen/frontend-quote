import React, {useState} from 'react';

import {
    Text,
    View,
    StyleSheet,
    Linking
} from 'react-native';

export default function Quote(props) {
    const [quote, setQuote] = useState();
    const socket = props.socket;
    async function openURL(url) {
        try {
            await Linking.openURL(url);
        } catch (error) {
            console.log(error);
        }
    }

    socket.on('daily quote', function(quote) {
        setQuote(quote);
      });

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Quote of the day</Text>
                <Text style={styles.genericText}>{quote && quote.quote}</Text>

                <View style={styles.linkContainer}>
                    <Text style={styles.linkText} onPress={async () => await openURL(quote && quote.source)}>Source</Text>
                    <Text style={styles.linkText} onPress={async () => await openURL(quote && quote.link)}>Link</Text>
                </View>

            </View>
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      height: '100%',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 15
    },
    genericText: {
        width: '70%',
        alignSelf: 'center',
        fontSize: 14
    },
    linkContainer: {
        display: "flex",
        width: '20%',
        flexDirection: 'row',
        paddingTop: 10,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    linkText: {
        paddingTop: 5,
        color: 'blue',
        fontSize: 12,
    }
  });