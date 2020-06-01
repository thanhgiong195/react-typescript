import React, { useState, useEffect } from 'react';
import {RouteComponentProps} from 'react-router-dom';
import axios from 'axios';

interface Props {
	match: any;
}

export type Member = {
	id: string,
	name: string,
	isManager: boolean
};

export function ItemDetail (props: Props) {
	
	const [member, setMember] = useState<Member>({
		id: '0',
		name: '',
		isManager: false
	});

	const [loading, setLoading] = useState<Boolean>(false);

	const [edit, setEdit] = useState<Boolean>(true);

	async function fetchData() {
		setLoading(true);
		const respone = await axios(`/Customer/${props.match.params.id}`);
		setMember(respone.data);
		setLoading(false);
	}

	useEffect(() => {
		fetchData();
		

	}, []);

	const handleToEdit = () => {
		setEdit(false);
		
	}
	
	return (
		<>
			<table>
				<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Manager</th>
				</tr>
				</thead>
				<tbody>
					{loading ? (
						<h1>Loading.....</h1>
					) : (
						<tr>
							<td>
								<input value={member.id} disabled={edit ? true : false}/>
							</td>
							<td>
								<input value={member.name} disabled={edit ? true : false}/>
							</td>
							<td>
								<input value={member.isManager ? 'true' : 'false'} disabled={edit ? true : false}/>
							</td>
						</tr>
					)}
				</tbody>
			</table>
			<button onClick={handleToEdit} className="btn btn-primary text-center">Edit</button>
		</>
	);
}
