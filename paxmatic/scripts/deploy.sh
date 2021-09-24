rm -rf build/
echo "Deleted build/ folder"

./gradlew bootJar
echo "Generating jar file"

#Copy execute_commands_on_ec2.sh file which has commands to be executed on server... Here we are copying this file
# every time to automate this process through 'deploy.sh' so that whenever that file changes, it's taken care of
scp -i "~/Printscreens/Roberto_key.pem" execute_commands_on_ec2.sh ec2-18-116-170-23.us-east-2.compute.amazonaws.com:/home/ec2-user
echo "Copied latest 'execute_commands_on_ec2.sh' file from local machine to ec2 instance"

scp -i "~/Downloads/aws-demo.pem" build/libs/demo-0.0.1-SNAPSHOT.jar ec2-user@ec2-18-116-170-23.us-east-2.compute.amazonaws.com:/home/ec2-user
echo "Copied jar file from local machine to ec2 instance"

echo "Connecting to ec2 instance and starting server using java -jar command"
ssh -i "~/Printscreens/Roberto_key.pem" ec2-18-116-170-23.us-east-2.compute.amazonaws.com ./execute_commands_on_ec2.sh