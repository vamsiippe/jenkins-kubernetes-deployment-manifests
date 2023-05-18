pipeline {
  environment {
    dockerimagename =  "vamsisnikky/react-app:${BUILD_NUMBER}"
    dockerImage = ""
  }
  agent {
    docker {
      image 'abhishekf5/maven-abhishek-docker-agent:v1'
      args '--user root -v /var/run/docker.sock:/var/run/docker.sock' // mount Docker socket to access the host's Docker daemon
    }
  }
  stages {
    stage('Checkout Source') {
      steps {
        git branch: 'main', credentialsId: '17811133-d29c-46bc-808a-e40eaf7a82d5', url: 'https://github.com/vamsiippe/jenkins-kubernetes-deployment.git'
      }
    }
    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }
    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhub-credentials'
           }
      steps{
        script {
          sh 'echo passed'

          //docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
          //  dockerImage.push()
          //}
        }
      }
    }
    
    stage('Edit and Push') {
    steps {
        script {
            // Clone the repository
            git credentialsId: 'github', url: 'https://github.com/vamsiippe/jenkins-kubernetes-deployment-manifests.git'

            // Make the desired changes to the repository files
            // For example, you can modify a file using shell commands
            sh 'sed -i "s/replaceImageTag/${BUILD_NUMBER}/g" deployment.yaml'
            // Commit the changes
            git add: '.', credentialsId: 'github'
            git commit: 'Modified deployment.yaml', credentialsId: 'github'

            // Push the changes back to the repository
            git push: 'origin', credentialsId: 'github'
        }
    }
}
  }
}