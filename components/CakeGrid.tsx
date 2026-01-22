
import React from 'react';
import { Cake } from '../types';
import CakeCard from './CakeCard';

interface CakeGridProps {
  cakes: Cake[];
}

const CakeGrid: React.FC<CakeGridProps> = ({ cakes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {cakes.map((cake) => (
        <CakeCard key={cake.id} cake={cake} />
      ))}
    </div>
  );
};

export default CakeGrid;
