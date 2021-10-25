import React from 'react';
import SkillIcon from './SkillIcon';

interface SkillGridProps {
	techSkills: string[];
}

const SkillGrid = ({ techSkills }: SkillGridProps) => {
	const colNums = 3;

	return (
		<div
			className={
				'grid grid-cols-3 p-4 w-3/4 bg-gray-800 m-auto rounded-2xl max-w-[650px]'
			}
		>
			{techSkills.map((tech, i) => (
				<SkillIcon
					key={tech}
					name={tech}
					forMobile={false}
					index={i}
					colNums={3}
				/>
			))}
		</div>
	);
};

export default SkillGrid;
