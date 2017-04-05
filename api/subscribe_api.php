<?php 
	include_once '../dbutil.php';

	$json_data = '';

	if (isset($_POST['subscribe_data'])) {
		$post_data = $_POST['subscribe_data'];
		$name = $post_data['name'];
		$email = $post_data['email'];

		$json_data = array(
			'status' => 'success',
			'name' => $name,
			'email' => $email
		);

		$sql_query = "INSERT INTO user(name, email) "
					. "VALUES ("
					. "'$name',"
					. "'$email')";

		$result = mysql_query($sql_query);

		if (!$result) {
			$json_data = array(
				'status' => 'error',
				'message' => 'There was a problem with subscribing, please try again later.'
			);
		}

		echo json_encode($json_data);

	} else {
		$json_data = array(
			'status' => 'error',
			'message' => 'No data present'
		);

		echo json_encode($json_data);
	}

?>