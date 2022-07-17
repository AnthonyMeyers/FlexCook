<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\IngredientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use app\filter\AddItemsFilter;


/**
 * @ApiResource(
 *  normalizationContext={"groups"={"Ingredient:read"}},
 *  denormalizationContext={"groups"={"Ingredient:write"}}
 * )
 * @ORM\Entity(repositoryClass=IngredientRepository::class)
 * @ApiFilter(AddItemsFilter::class)
 */
class Ingredient
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("Ingredient:read")
     * @Groups({"Inventory:read", "Inventory:write"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=200)
     * @Groups({"Ingredient:read", "Ingredient:write"})
     * @Groups({"Inventory:read"})
     */
    private $igtName;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"Ingredient:read", "Ingredient:write"})
     */
    private $igtEng;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"Ingredient:read", "Ingredient:write"})
     */
    private $igtPtn;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"Ingredient:read", "Ingredient:write"})
     */
    private $igtFts;

    /**
     * @ORM\OneToMany(targetEntity=Inventory::class, mappedBy="igtInv", orphanRemoval=true)
     * @Groups({"Ingredient:read", "Ingredient:write"})
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
