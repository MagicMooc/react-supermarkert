import React from "react";

export default function ProductDetailNutrition({ nutrition }) {
    return (
      <table className="table table-nutrition">
        <thead>
          <tr>
            <th>营养素</th>
            <th>含量</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>蛋白质</td>
            <td>{nutrition.protein}g</td>
          </tr>
          <tr>
            <td>碳水化合物</td>
            <td>{nutrition.carbs}g</td>
          </tr>
          <tr>
            <td>脂肪</td>
            <td>{nutrition.fat}g</td>
          </tr>
          <tr>
            <td>盐</td>
            <td>{nutrition.salt}g</td>
          </tr>
        </tbody>
      </table>
    );
}