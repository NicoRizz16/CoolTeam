<?php

namespace AppBundle\Utils;

use AppBundle\Entity\Picture;
use Doctrine\ORM\EntityManagerInterface;

class Pictures
{
    const nbPictures = 3;

    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function generate($observation)
    {
        for ($i = count($observation->getPictures()); $i < self::nbPictures; $i++) {
            $observation->addPicture(new Picture());
        }
    }

    public function deleteEmptyPicture($observation)
    {
        foreach ($observation->getPictures() as $picture) {
            if($picture->getImageFile() === NULL) {
                $observation->removePicture($picture);
            }
        }
    }
}