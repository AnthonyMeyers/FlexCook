<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\InventoryRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ApiResource(
 *  normalizationContext={"groups"={"Inventory:read"}},
 *  denormalizationContext={"groups"={"Inventory:write"}}
 * )
 * @ORM\Entity(repositoryClass=InventoryRepository::class)
 * @ApiFilter(SearchFilter::class, properties={"usrInv"})
 */
class Inventory
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"Inventory:read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="inventories")
     * @ORM\JoinColumn(nullable=false)
     */
    private $usrInv;

    /**
     * @ORM\ManyToOne(targetEntity=Ingredient::class, inversedBy="inventories")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"Inventory:read", "Inventory:write"})
     */
    private $igtInv;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"Inventory:read", "Inventory:write"})
     */
    private $invCnt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsrInv(): ?User
    {
        return $this->usrInv;
    }

    public function setUsrInv(?User $usrInv): self
    {
        $this->usrInv = $usrInv;

        return $this;
    }

    public function getIgtInv(): ?Ingredient
    {
        return $this->igtInv;
    }

    public function setIgtInv(?Ingredient $igtInv): self
    {
        $this->igtInv = $igtInv;

        return $this;
    }

    public function getInvCnt(): ?int
    {
        return $this->invCnt;
    }

    public function setInvCnt(int $invCnt): self
    {
        $this->invCnt = $invCnt;

        return $this;
    }
}
