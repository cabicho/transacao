FROM		node:14.15.4-alpine3.12 	        
#// 35Mb
RUN		    npm install -g @nestjs/cli@8.0.0 
#&& npm install && npm run start:dev
# && 
# RUN         npm install && npm run start:dev
# RUN         npm install && 
USER		node 				                
#// usuario da imagem e do container
WORKDIR 	/home/node/app 		                
#// local de trabalho

#// para correr nao so a imagem gerado no nest
#// como também a imagem ja existente no dockerhub

