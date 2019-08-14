// inimigos 

// vermelhos - life 10
// blue - life 5
// green - life 3
// yellow - life 2
// pink - life 1

// player

// - pontos
// - vidas

class Enemy {
	positionX = 0
	positionY = 0
	static width = 100
	static height = 80

	constructor(positionX, positionY) {
		this.positionX = positionX
		this.positionY = positionY
	}
}

class Red extends Enemy {
	image = 'path/to/image/red'
	life = 10
}

class Blue extends Enemy {
	image = 'path/to/image/blue'	
	life = 5
}

let reds = new Array(8)
reds = reds.fill().map( (item, index) => new Red(index * Red.width + 10, 0) )

let blues = new Array(8)
blues = blues.fill().map( (item, index) => new Blue(index * Blue.width + 10, 90) )

