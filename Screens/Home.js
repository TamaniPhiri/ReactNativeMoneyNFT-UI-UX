import { View, Text, SafeAreaView,Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import avatar from './images/avatar.jpg'
import {Feather, Fontisto} from 'react-native-vector-icons';

const Home = () => {
  return (
    <SafeAreaView style={{flex:1, alignItems:'center',paddingTop: Platform.OS === 'android' ? 35 : 0}}>

        {/*Header*/}
        <View style={{width:'100%'}}>
            <View style={{paddingTop:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
                <View style={{flexDirection:'row'}}>

                    {/*Avatar*/}
                    <TouchableOpacity>
                        <Image source={avatar} style={{width:45, height:45, borderRadius:25}} />
                    </TouchableOpacity>

                    {/*Greetings*/}
                    <View style={{alignItems:'flex-start', justifyContent:'center', paddingLeft:10}}>
                        <Text style={{color:'#597081'}}>Hello Troi,</Text>
                        <Text style={{fontSize:16, color:'#36494E'}}>Welcome Back</Text>
                    </View>

                </View>

                {/*Notification icon*/}
                <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                    <View style={{borderWidth:1, alignItems:'center', justifyContent:'center', borderRadius:25, borderColor:'#597081' }}>
                        <Feather name="bell" style={{padding:10, fontSize:15, color:'#597081'}}/>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

        

        <ScrollView horizontal={false} style={{flex:1, width:'100%'}}>

            {/*Card 1*/}
            <View style={{paddingHorizontal:20, paddingVertical:20 }}>
                <View style={{backgroundColor:'#7EA0B7', width:'100%', borderRadius:10}}>

                    {/*Card Header*/}
                    <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
                        <Feather name="gift" style={{color:'#fff', fontSize:30}}/>
                        <Text style={{color:'#fff', paddingLeft:15, fontSize:24, fontWeight:'600'}}>Lorem Ipsum</Text>
                    </View>

                    {/*Middle*/}
                    <View style={{flexDirection:'row', paddingLeft:12, alignItems:'center', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:36, color:'#fff'}}>$75,500.99</Text>
                            <Feather name="eye-off" style={{fontSize:24, paddingHorizontal:20, color:'#36494E', marginTop:10}}/>
                        </View>
                        <View>
                            <Fontisto name="qrcode" style={{fontSize:22, paddingHorizontal:15, color:'#36494E'}}/>
                        </View>
                    </View>

                    {/*BottomIcons*/}
                    <View style={{flexDirection:'row', paddingLeft:12,paddingRight:12, alignItems:'center', justifyContent:'space-between', paddingVertical:10}}>
                        <View style={{backgroundColor:'#fff', borderRadius:80, alignItems:'center'}}>
                            <View style={{padding:10, alignItems:'center'}}>
                                <Feather name="dollar-sign" style={{fontSize:16, color:'#36494E', padding:1}}/>
                                <Text style={{padding:1, fontWeight:'300', color:'#36494E', marginTop:2}}>Ipsum</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#fff', borderRadius:80, alignItems:'center'}}>
                            <View style={{padding:10, alignItems:'center'}}>
                                <Feather name="credit-card" style={{fontSize:16, color:'#36494E', padding:1}}/>
                                <Text style={{padding:1, fontWeight:'300', color:'#36494E', marginTop:2}}>Lorem</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#fff', borderRadius:80, alignItems:'center'}}>
                            <View style={{padding:10, alignItems:'center'}}>
                                <Feather name="truck" style={{fontSize:16, color:'#36494E', padding:1}}/>
                                <Text style={{padding:1, fontWeight:'300', color:'#36494E', marginTop:2}}>Ipsum</Text>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#fff', borderRadius:80, alignItems:'center'}}>
                            <View style={{padding:10, alignItems:'center'}}>
                                <Feather name="shopping-bag" style={{fontSize:16, color:'#36494E', padding:1}}/>
                                <Text style={{padding:1, fontWeight:'300', color:'#36494E', marginTop:2}}>Lorem</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/*Card 2*/}
            <View style={{paddingHorizontal:20, paddingVertical:10 }}>
                <View style={{backgroundColor:'#fff', width:'100%', borderRadius:10}}>

                    {/*Header*/}
                    <Text style={{color:'#597081', paddingLeft:15, fontSize:20, fontWeight:'600',paddingVertical:10}}>
                        Lorem Ipsum
                    </Text>

                    {/*Card content*/}
                    <View style={{flexDirection:'row', paddingLeft:12,paddingRight:12, alignItems:'center', justifyContent:'space-between', paddingVertical:10}}>

                        {/*Icon list 1*/}
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#A9CEF4', padding:20, alignItems:'center',borderRadius:80}}>
                                <Feather name="pen-tool" style={{color:'#597081', fontSize:20}}/>
                            </View>
                            <Text style={{marginTop:5, color:'#597081'}}>Lorem</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#A9CEF4', padding:20, alignItems:'center',borderRadius:80}}>
                                <Feather name="codepen" style={{color:'#597081', fontSize:20}}/>
                            </View>
                            <Text style={{marginTop:5, color:'#597081'}}>Ipsum</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#A9CEF4', padding:20, alignItems:'center',borderRadius:80}}>
                                <Feather name="cpu" style={{color:'#597081', fontSize:20}}/>
                            </View>
                            <Text style={{marginTop:5, color:'#597081'}}>Lorem</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#A9CEF4', padding:20, alignItems:'center',borderRadius:80}}>
                                <Feather name="rss" style={{color:'#597081', fontSize:20}}/>
                            </View>
                            <Text style={{marginTop:5, color:'#597081'}}>Ipsum</Text>
                        </View>
                    </View>

                    {/*Icon List 2*/}
                    <View style={{flexDirection:'row', paddingLeft:12,paddingRight:12, alignItems:'center', justifyContent:'space-between', paddingVertical:10}}>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#A9CEF4', padding:20, alignItems:'center',borderRadius:80}}>
                                <Feather name="thumbs-up" style={{color:'#597081', fontSize:20}}/>
                            </View>
                            <Text style={{marginTop:5, color:'#597081', marginBottom:5}}>Lorem</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#A9CEF4', padding:20, alignItems:'center',borderRadius:80}}>
                                <Feather name="umbrella" style={{color:'#597081', fontSize:20}}/>
                            </View>
                            <Text style={{marginTop:5, color:'#597081', marginBottom:5}}>Ipsum</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#A9CEF4', padding:20, alignItems:'center',borderRadius:80}}>
                                <Feather name="watch" style={{color:'#597081', fontSize:20}}/>
                            </View>
                            <Text style={{marginTop:5, color:'#597081', marginBottom:5}}>Lorem</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#A9CEF4', padding:20, alignItems:'center',borderRadius:80}}>
                                <Feather name="zap" style={{color:'#597081', fontSize:20}}/>
                            </View>
                            <Text style={{marginTop:5, color:'#597081', marginBottom:5}}>Ipsum</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/*Recent Activity section*/}
            <View style={{paddingHorizontal:20, paddingVertical:10, flexDirection:'row', justifyContent:'space-between' }}>

                {/*Title*/}
                <Text style={{fontSize:18}}>
                    Recently Activity
                </Text>

                {/*See all*/}
                <TouchableOpacity>
                    <Text style={{textDecorationLine:'underline', color:'#7EA0B7'}}>
                        See All
                    </Text>
                </TouchableOpacity>
            </View>

            <View>

                {/*Bottom Card1*/}
                <View style={{width:'100%'}}>
                    <View style={{paddingTop:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
                        <View style={{flexDirection:'row'}}>

                            {/*Avatar*/}
                            <TouchableOpacity>
                                <Image source={avatar} style={{width:45, height:45, borderRadius:25}} />
                            </TouchableOpacity>
                    
                            {/*Names*/}
                            <View style={{alignItems:'flex-start', justifyContent:'center', paddingLeft:10}}>
                                <Text style={{color:'#597081', fontSize:16}}>Troi Machiavelli</Text>
                                <Text style={{fontSize:12, color:'#36494E', textDecorationLine:'underline'}}>Send Money</Text>
                            </View>

                        </View>

                        {/*Amount and date*/}
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{alignItems:'center', justifyContent:'center', borderRadius:25, borderColor:'#597081' }}>
                                <Feather name="share" style={{padding:10, fontSize:24, color:'#597081'}}/>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                {/*Bottom Card2*/}
                <View style={{width:'100%'}}>
                    <View style={{paddingTop:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
                        <View style={{flexDirection:'row'}}>

                            {/*Avatar*/}
                            <TouchableOpacity>
                                <Image source={avatar} style={{width:45, height:45, borderRadius:25}} />
                            </TouchableOpacity>
                    
                            {/*Names*/}
                            <View style={{alignItems:'flex-start', justifyContent:'center', paddingLeft:10}}>
                                <Text style={{color:'#597081', fontSize:16}}>Troi Machiavelli</Text>
                                <Text style={{fontSize:12, color:'#36494E', textDecorationLine:'underline'}}>Send Money</Text>
                            </View>

                        </View>

                        {/*Amount and date*/}
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{alignItems:'center', justifyContent:'center', borderRadius:25, borderColor:'#597081' }}>
                                <Feather name="share" style={{padding:10, fontSize:24, color:'#597081'}}/>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                {/*Bottom Card3*/}
                <View style={{width:'100%'}}>
                    <View style={{paddingTop:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
                        <View style={{flexDirection:'row'}}>

                            {/*Avatar*/}
                            <TouchableOpacity>
                                <Image source={avatar} style={{width:45, height:45, borderRadius:25}} />
                            </TouchableOpacity>
                    
                            {/*Names*/}
                            <View style={{alignItems:'flex-start', justifyContent:'center', paddingLeft:10}}>
                                <Text style={{color:'#597081', fontSize:16}}>Troi Machiavelli</Text>
                                <Text style={{fontSize:12, color:'#36494E', textDecorationLine:'underline'}}>Send Money</Text>
                            </View>

                        </View>

                        {/*Amount and date*/}
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{alignItems:'center', justifyContent:'center', borderRadius:25, borderColor:'#597081' }}>
                                <Feather name="share" style={{padding:10, fontSize:24, color:'#597081'}}/>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>


                {/*Bottom Card4*/}
                <View style={{width:'100%'}}>
                    <View style={{paddingTop:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
                        <View style={{flexDirection:'row'}}>

                            {/*Avatar*/}
                            <TouchableOpacity>
                                <Image source={avatar} style={{width:45, height:45, borderRadius:25}} />
                            </TouchableOpacity>
                    
                            {/*Names*/}
                            <View style={{alignItems:'flex-start', justifyContent:'center', paddingLeft:10}}>
                                <Text style={{color:'#597081', fontSize:16}}>Troi Machiavelli</Text>
                                <Text style={{fontSize:12, color:'#36494E', textDecorationLine:'underline'}}>Send Money</Text>
                            </View>

                        </View>

                        {/*Amount and date*/}
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{alignItems:'center', justifyContent:'center', borderRadius:25, borderColor:'#597081' }}>
                                <Feather name="share" style={{padding:10, fontSize:24, color:'#597081'}}/>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>



                {/*Bottom Card5*/}
                <View style={{width:'100%'}}>
                    <View style={{paddingTop:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
                        <View style={{flexDirection:'row'}}>

                            {/*Avatar*/}
                            <TouchableOpacity>
                                <Image source={avatar} style={{width:45, height:45, borderRadius:25}} />
                            </TouchableOpacity>
                    
                            {/*Names*/}
                            <View style={{alignItems:'flex-start', justifyContent:'center', paddingLeft:10}}>
                                <Text style={{color:'#597081', fontSize:16}}>Troi Machiavelli</Text>
                                <Text style={{fontSize:12, color:'#36494E', textDecorationLine:'underline'}}>Send Money</Text>
                            </View>

                        </View>

                        {/*Amount and date*/}
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}>
                            <View style={{alignItems:'center', justifyContent:'center', borderRadius:25, borderColor:'#597081' }}>
                                <Feather name="share" style={{padding:10, fontSize:24, color:'#597081'}}/>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>


                <View style={{alignItems:'center',paddingVertical:20}}>
                    <TouchableOpacity style={{width:'100%', alignItems:'center', justifyContent:'center'}}>
                        <View style={{marginTop:20, width:'80%', alignItems:'center', justifyContent:'center', backgroundColor:'#A9CEF4', borderRadius:10}}>
                            <Text style={{padding:10, fontSize:20, fontWeight:'600',color:"#fff"}}>See More</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                

            </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default Home;