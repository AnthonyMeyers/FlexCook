<?php

namespace App\Filter;

use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\AbstractFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use App\Entity\Ingredient;
use App\Entity\Inventory;
use Doctrine\ORM\Query\ResultSetMapping;
use Doctrine\ORM\QueryBuilder;
use Doctrine\DBAL\Connection;

class AddItemsFilter extends AbstractFilter
{

    /**
     * @throws \Doctrine\DBAL\Exception
     */
    protected function filterProperty(string $property, $value, QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, string $operationName = null)
    {
        if ($property !== 'inactive_item_list') {
            return;
        }


        $valueParameter = $queryNameGenerator->generateParameterName('inactive_item_list');

        $alias = $queryBuilder->getAllAliases()[0];

        $queryBuilder
        ->select("o")
        ->join("o.inventories","i")
        ->where(sprintf("o.id IN (select igtinv from ".Inventory::class." where usrInv = :%s)",$valueParameter))

            ->setParameter($valueParameter, $value);

        /*->setParameter($valueParameter, $value)*/


            /*->leftJoin('inv', 'phonenumbers', 'p', 'p.is_primary = 1')*/
            /*->andWhere(sprintf('%s.igtName LIKE :%s', $alias, $valueParameter))
            ->setParameter($valueParameter, '%'.$value.'%');*/

    }

    public function getDescription(string $resourceClass): array
    {
        return [
            'inactive_item_list' => [
                'property' => null,
                'type' => 'string',
                'required' => false,
                'openapi' => [
                    'description' => "Search for items that the user currently doesn't use",
                ],
            ]
        ];
    }
}

//Query to get item by part name
/*$queryBuilder
    ->andWhere(sprintf('%s.igtName LIKE :%s', $alias, $valueParameter))
    ->setParameter($valueParameter, '%'.$value.'%');*/