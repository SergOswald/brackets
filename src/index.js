module.exports = function check(str, bracketsConfig) {
  var chars = str.split( "" ) ;
  //var chars = Array.from( str ) ;
  var stek = [] ;
  var osk = [] ;
  var close = [] ;
  
  for( let i = 0 ; i < bracketsConfig.length ; i++ ) {
    osk[ i ] = bracketsConfig[ i ][ 0 ] ;
    close[ i ] = bracketsConfig[ i ][ 1 ] ;
  } ;
  
  if( str.length % 2 !== 0 ) {
    return false ;
  }else{
  
  var closeIndex ;
  var openIndex ;
  
  for( var i = 0 ; i < str.length ; i++ ){
    openIndex = osk.indexOf( str[ i ] ) ;
    if( openIndex !== -1 ) {
      stek.push( openIndex ) ;
     // continue ;
    } ;
  
    closeIndex = close.indexOf( str[ i ] ) ;
    if( closeIndex !== -1 ) {
      openIndex = stek.pop() ;
      if( closeIndex !== openIndex ) {
        return false ;
      } ;
    } ;
  } ;
  if( stek.length !== 0 ) {
    return false ;
  } ;
  return true ;
  } ;
  } ;
