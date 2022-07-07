<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\IngredientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=IngredientRepository::class)
 */
class Ingredient
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=200)
     */
    private $igtName;

    /**
     * @ORM\Column(type="integer")
     */
    private $igtEng;

    /**
     * @ORM\Column(type="integer")
     */
    private $igtPtn;

    /**
     * @ORM\Column(type="integer")
     */
    private $igtFts;

    /**
     * @ORM\OneToMany(targetEntity=Inventory::class, mappedBy="igtInv", orphanRemoval=true)
     */
    private $inventories;

    public function __construct()
    {
        $this->inventories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIgtName(): ?string
    {
        return $this->igtName;
    }

    public function setIgtName(string $igtName): self
    {
        $this->igtName = $igtName;

        return $this;
    }

    public function getIgtEng(): ?string
    {
        return $this->igtEng;
    }

    public function setIgtEng(?string $igtEng): self
    {
        $this->igtEng = $igtEng;

        return $this;
    }

    public function getIgtPtn(): ?int
    {
        return $this->igtPtn;
    }

    public function setIgtPtn(int $igtPtn): self
    {
        $this->igtPtn = $igtPtn;

        return $this;
    }

    public function getIgtFts(): ?int
    {
        return $this->igtFts;
    }

    public function setIgtFts(int $igtFts): self
    {
        $this->igtFts = $igtFts;

        return $this;
    }

    /**
     * @return Collection<int, Inventory>
     */
    public function getInventories(): Collection
    {
        return $this->inventories;
    }

    public function addInventory(Inventory $inventory): self
    {
        if (!$this->inventories->contains($inventory)) {
            $this->inventories[] = $inventory;
            $inventory->setIgtInv($this);
        }

        return $this;
    }

    public function removeInventory(Inventory $inventory): self
    {
        if ($this->inventories->removeElement($inventory)) {
            // set the owning side to null (unless already changed)
            if ($inventory->getIgtInv() === $this) {
                $inventory->setIgtInv(null);
            }
        }

        return $this;
    }
}
