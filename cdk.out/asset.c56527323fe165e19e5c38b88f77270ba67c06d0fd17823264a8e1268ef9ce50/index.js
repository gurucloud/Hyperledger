"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.handler=exports.PHYSICAL_RESOURCE_ID_REFERENCE=void 0;var shared_1=require("./shared");Object.defineProperty(exports,"PHYSICAL_RESOURCE_ID_REFERENCE",{enumerable:!0,get:function(){return shared_1.PHYSICAL_RESOURCE_ID_REFERENCE}});const env=process.env.AWS_EXECUTION_ENV,runtime=env&&env>="AWS_Lambda_nodejs18.x"?require("./aws-sdk-v3-handler"):require("./aws-sdk-v2-handler");exports.handler=runtime.handler;