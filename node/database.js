// typical approach
// var conn = getDbConnection(connectionString);
// var stmt = conn.createStatement();
// var result = stmt.executeQuery(sqlQuery);
// for(var i=0; i<result.length; i++){
//     print result[i];
// }

// non-blocking approach

// getDbConnection(connectionString, function(error, conn){
//     conn.createStatement(function(error, stmt){
//         var result = stmt.executeQuery(sqlQuery);
//         result.on('row', function(result){
//             print result
//         });
//     });
// });

