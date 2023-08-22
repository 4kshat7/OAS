<?php
            echo implode($_REQUEST);
            $con=mysqli_connect('localhost','root','');
            $db=mysqli_select_db($con,'newlogin');
            $username=$_REQUEST['uname'];
            $sq1_name=$_REQUEST['sq1name'];
            $sq2_name=$_REQUEST['sq2name'];
            $insquery = mysqli_query($con,"insert into sequences_compared (username,seq1_name,seq2_name) values('$username','$sq1_name','$sq2_name')");
            // $run=mysqli_query($con,$insqurey);
            // echo $insquery;
            if($insquery){
                header('Location: index.html');
            }
            else{
                echo "Error While Uploading data";
            }
?>