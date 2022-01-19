function requestValidator(obj) {
               const validMetods = ['GET', 'POST', 'DELETE', 'CONNECT'];
               const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

               const uriPattern = /(^[\w.]+$)/;
               const messagePattern = /([<>\\&'"])/;


               if (obj.method == undefined || !validMetods.includes(obj.method)) {
                              throw new Error(`Invalid request header: Invalid Method`);
               };
               if (obj.uri == undefined || !uriPattern.test(obj.uri) || obj.uri == '') {
                              throw new Error(`Invalid request header: Invalid URI`);
               };
               if (obj.version == undefined || !validVersion.includes(obj.version)) {
                              throw new Error(`Invalid request header: Invalid Version`);
               };
               if (obj.message == undefined || messagePattern.test(obj.message)) {
                              throw new Error(`Invalid request header: Invalid Message`);
               };

               return obj;
}

console.log(requestValidator({
               method: 'GET',
               uri: 'svn.public.catalog',
               version: 'HTTP/1.1',
               message: ''
             }))