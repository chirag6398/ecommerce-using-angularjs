class FormValidation{
    constructor(){
        this.correct=false;
    }
    validatePassword=($scope)=>{

        
        
        
            let regExLowerCase=/[a-z]/g;
            
            if(regExLowerCase.test($scope.signin.password)){
                $scope.c1={
                    color: "green",
                    opacity: "0.9"
                }
               
            }else{
               $scope.c1={
                color: "gray",
                opacity: "0.7"
               }
            }
        
            let regExUpperCase=/[A-Z]/g;
        
            if(regExUpperCase.test($scope.signin.password)){
                $scope.c2={
                    color: "green",
                    opacity: "0.9"
                }
               
            }else{
               $scope.c2={
                color: "gray",
                opacity: "0.7"
               }
            }
        
            let regExNumber=/[0-9]/g;
        
            if(regExNumber.test($scope.signin.password)){
                $scope.c3={
                    color: "green",
                    opacity: "0.9"
                }
               
            }else{
               $scope.c3={
                color: "gray",
                opacity: "0.7"
               }
            }
    
            if($scope.signin.password.length>=5 && $scope.signin.password.length<=8){
                $scope.c4={
                    color: "green",
                    opacity: "0.9"
                }
               
            }else{
               $scope.c4={
                color: "gray",
                opacity: "0.7"
               }
            }
        
        
    }
}